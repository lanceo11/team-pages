// Adventure Game Custom Level

import GameEnvBackground from '/assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1.1/essentials/Player.js';
import Npc from '/assets/js/GameEnginev1.1/essentials/Npc.js';
import Barrier from '/assets/js/GameEnginev1.1/essentials/Barrier.js';
import Collectible from '/assets/js/GameEnginev1.1/essentials/Collectible.js';

console.log('GameLevelSeek.js loaded:', new Date().toISOString());

class GameLevelSeek {
    constructor(gameEnv) {

        const path = gameEnv.path;
        const width = gameEnv.innerWidth;
        const height = gameEnv.innerHeight;

        // ---------------- BACKGROUND ----------------
        const bgData = {
            name: "custom_bg",
            src: path + "/images/projects/characters/tagplayground.png",
            pixels: { height: 400, width: 560 }
        };

        // ---------------- PLAYER ----------------
        const playerData = {
            id: 'playerData',
            src: path + "/images/projects/characters/boysprite.png",
            SCALE_FACTOR: 5,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 32, y: 300 },
            pixels: { height: 612, width: 408 },
            orientation: { rows: 4, columns: 3 },
            down: { row: 0, start: 0, columns: 3 },
            downRight: { row: 1, start: 0, columns: 3 },
            downLeft: { row: 0, start: 0, columns: 3 },
            left: { row: 2, start: 0, columns: 3 },
            right: { row: 1, start: 0, columns: 3 },
            up: { row: 3, start: 0, columns: 3 },
            upLeft: { row: 2, start: 0, columns: 3 },
            upRight: { row: 3, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0, heightPercentage: 0 },
            keypress: { up: 87, left: 65, down: 83, right: 68 }
        };

        // ---------------- GAME STATE ----------------
        const coinState = {
            total: 6,
            collected: 0,
            kirbySpawned: false
        };

        // =====================================================
        // 🎮 SPRITE SWAP SYSTEM (PRESS E)
        // =====================================================
        const spriteOptions = [
            path + "/images/projects/characters/boysprite.png",
            path + "/images/projects/characters/kirby.png"
        ];

        let currentSprite = 0;

        const getPlayer = () => {
            return gameEnv.gameObjects.find(obj => obj.id === 'playerData');
        };

        const setSprite = (src) => {
            const player = getPlayer();
            if (!player) return;

            player.src = src;

            // force refresh if engine caches image
            if (player.image) {
                player.image.src = src;
            }

            console.log("Sprite switched:", src);
        };

        const toggleSprite = () => {
            currentSprite = (currentSprite + 1) % spriteOptions.length;
            setSprite(spriteOptions[currentSprite]);
        };

        document.addEventListener("keydown", (e) => {
            if (e.key === "e" || e.key === "E") {
                toggleSprite();
            }
        });
        // =====================================================

        // ---------------- COIN SPRITE ----------------
        const createPixelCoin = () => {
            const size = 12;
            const scale = 3;

            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;

            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = false;

            const p = (x, y, color) => {
                ctx.fillStyle = color;
                ctx.fillRect(x, y, 1, 1);
            };

            const coinPixels = [
                [4,0],[5,0],[6,0],[7,0],
                [2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],
                [1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],
                [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],
                [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[11,5],
            ];

            coinPixels.forEach(([x, y]) => p(x, y, '#FFD700'));

            const scaled = document.createElement('canvas');
            scaled.width = size * scale;
            scaled.height = size * scale;

            const sctx = scaled.getContext('2d');
            sctx.imageSmoothingEnabled = false;
            sctx.drawImage(canvas, 0, 0, scaled.width, scaled.height);

            return scaled.toDataURL();
        };

        const coinSprite = createPixelCoin();

        // ---------------- SPAWN COINS ----------------
        const spawnCoins = () => {
            const padding = 80;
            const positions = [];

            while (positions.length < coinState.total) {
                positions.push({
                    x: Math.random() * (width - padding),
                    y: Math.random() * (height - padding)
                });
            }

            positions.forEach((pos, i) => {
                const coin = new Collectible({
                    id: `coin_${i}`,
                    src: coinSprite,
                    SCALE_FACTOR: 15,
                    INIT_POSITION: pos,
                    pixels: { height: 36, width: 36 },
                    interact: function () {
                        coinState.collected++;
                        this.destroy();

                        if (coinState.collected >= coinState.total) {
                            coinState.kirbySpawned = true;
                        }
                    }
                }, gameEnv);

                gameEnv.gameObjects.push(coin);
            });
        };

        // ---------------- GAME OBJECTS ----------------
        this.classes = [
            { class: GameEnvBackground, data: bgData },
            { class: Player, data: playerData },
            { class: Barrier, data: { id: 'b1', x: 100, y: 100, width: 50, height: 50 } }
        ];

        // ---------------- START ----------------
        spawnCoins();
    }
}

export default GameLevelSeek;