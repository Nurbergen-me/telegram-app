'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import WebApp from "@twa-dev/sdk";

export function useBackButtonSupport() {
    const router = useRouter();
    const pathname = usePathname();
    const historyStack = useRef<string[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {

            const backButton = WebApp.BackButton;

            // Если есть предыдущий путь — показать кнопку назад
            if (historyStack.current.length > 0) {
                backButton.show();
            } else {
                backButton.hide();
            }

            // Слушаем нажатие на кнопку
            const handleBack = () => {
                if (historyStack.current.length > 0) {
                    const prev = historyStack.current.pop();
                    if (prev) {
                        router.push(prev);
                    }
                }
            };

            backButton.onClick(handleBack);

            return () => {
                backButton.offClick(handleBack);
            };
        }
    }, [pathname, router]);

    // Обновляем стек при каждом переходе
    useEffect(() => {
        historyStack.current.push(pathname);
    }, [pathname]);
}
