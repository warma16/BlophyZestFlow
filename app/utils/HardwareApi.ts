import { useEffect } from 'react';

const insertAfter = (newElement: HTMLElement, targetElement: HTMLElement): void => {
    const parent = targetElement.parentNode;
    if (parent?.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        parent?.insertBefore(newElement, targetElement.nextSibling);
    }
};

class Api {
    public static checkPhone(): boolean {
        const flag = navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        );
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        if (screenWidth <= 768 && screenHeight <= 1024) {
            return true;
        }
        return !!flag;
    }

    public  static getProcessors(): number | null {
        const agent = navigator.userAgent.toLowerCase();
        if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
            return 32;
        }
        if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
            return 64;
        }
        return null;
    }

    public static isMac(): boolean {
        return /macintosh|mac os x/i.test(navigator.userAgent);
    }

    public static download(url: string, filename: string): void {
        const eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        eleLink.href = url;
        document.body.appendChild(eleLink);
        eleLink.click();
        document.body.removeChild(eleLink);
    }

    public static loadJs(path: string, afterDom: HTMLElement | null = null): void {
        const script = document.createElement("script");
        script.src = path;
        if (afterDom) {
            insertAfter(script, afterDom);
        } else {
            const s = document.getElementsByTagName("script")[0];
            s.parentNode?.insertBefore(script, s);
        }
    }

    public static getIp(): void {
        // Implementation for getting IP address can be added here
    }
}

export default Api;
