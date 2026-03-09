"use client";

import { useMemo } from "react";
import type { CSSProperties } from "react";

const ICONS = [
    "/images/icons/smile.png",
    "/images/icons/teeth.png",
    "/images/icons/teeth (1).png",
    "/images/icons/tooth-whitening.png",
    "/images/icons/tooth.png",
];

type ToothConfig = {
    src: string;
    sizePx: number;
    leftPercent: string;
    topPercent: string;
    durationSec: string;
    delaySec: string;
    translateXPx: string;
    translateYPx: string;
    opacity: number;
    rotation: number;
};

const createRng = (seed: number) => {
    let state = seed >>> 0;
    return () => {
        state += 0x6d2b79f5;
        state = Math.imul(state ^ (state >>> 15), 1 | state);
        state ^= state + Math.imul(state ^ (state >>> 7), 61 | state);
        return ((state ^ (state >>> 14)) >>> 0) / 4294967296;
    };
};

const fmt = (v: number, unit: string) =>
    `${Math.abs(v) < 0.0005 ? 0 : v.toFixed(2)}${unit}`;

const generateItems = (count: number, seed: number): ToothConfig[] => {
    const rng = createRng(seed);
    return Array.from({ length: count }, () => {
        const size = 14 + rng() * 12;
        const duration = 18 + rng() * 16;
        return {
            src: ICONS[Math.floor(rng() * ICONS.length)],
            sizePx: size,
            leftPercent: fmt(rng() * 100, "%"),
            topPercent: fmt(rng() * 100, "%"),
            durationSec: fmt(duration, "s"),
            delaySec: fmt(rng() * -duration, "s"),
            translateXPx: fmt((rng() - 0.5) * 100, "px"),
            translateYPx: fmt((rng() - 0.5) * 120, "px"),
            opacity: 0.08 + rng() * 0.40,
            rotation: Math.floor(rng() * 360),
        };
    });
};

type TeethBackgroundProps = {
    count?: number;
    seed?: number;
    className?: string;
};

const TeethBackground = ({
    count = 60,
    seed = 7,
    className,
}: TeethBackgroundProps) => {
    const items = useMemo(() => generateItems(count, seed), [count, seed]);

    return (
        <div
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
        >
            <style>{`
                .tooth-float {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                    animation-name: toothDrift;
                    filter: grayscale(60%);
                    object-fit: contain;
                }
                .tooth-float:nth-of-type(odd) {
                    animation-name: toothDriftAlt;
                }
                @keyframes toothDrift {
                    0%, 100% { transform: translate(-50%, -50%) rotate(var(--rot)); }
                    50% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) rotate(calc(var(--rot) + 8deg)); }
                }
                @keyframes toothDriftAlt {
                    0%, 100% { transform: translate(-50%, -50%) rotate(var(--rot)) scale(1); }
                    40% { transform: translate(calc(-50% - calc(var(--tx) * 0.6)), calc(-50% - calc(var(--ty) * 0.6))) rotate(calc(var(--rot) - 6deg)) scale(1.04); }
                    70% { transform: translate(calc(-50% + calc(var(--tx) * 0.8)), calc(-50% + calc(var(--ty) * 0.8))) rotate(calc(var(--rot) + 4deg)) scale(0.97); }
                }
            `}</style>
            {items.map((item, i) => (
                <img
                    key={i}
                    src={item.src}
                    alt=""
                    className="tooth-float"
                    width={item.sizePx}
                    height={item.sizePx}
                    style={
                        {
                            left: item.leftPercent,
                            top: item.topPercent,
                            opacity: item.opacity,
                            animationDelay: item.delaySec,
                            animationDuration: item.durationSec,
                            "--tx": item.translateXPx,
                            "--ty": item.translateYPx,
                            "--rot": `${item.rotation}deg`,
                        } as CSSProperties
                    }
                />
            ))}
        </div>
    );
};

export default TeethBackground;
