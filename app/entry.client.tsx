/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import {RemixBrowser} from "@remix-run/react";
import {startTransition, StrictMode,useEffect} from "react";


import {hydrateRoot} from "react-dom/client";

import vConsole from "vconsole";
import HardwareApi from "./utils/HardwareApi"
//检测是否为移动端，且在开发环境，如果是，启动vconsole
let vConsoleInstance: vConsole | null = null;

function adjustConsolePosition() {
  // 强制修改 vConsole 的 z-index
  const vConsoleElement = document.querySelector('#__vconsole') as HTMLElement;
  if (vConsoleElement) {
    vConsoleElement.style.zIndex = '99999';
  }
}

function VConsoleWrapper() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development" && HardwareApi.checkPhone()) {
      // 方案1：在组件挂载后初始化
      vConsoleInstance = new vConsole();
      adjustConsolePosition();
      
      // 添加窗口变化监听（可选）
      window.addEventListener('resize', adjustConsolePosition);
    }
    return () => {
      vConsoleInstance?.destroy();
      window.removeEventListener('resize', adjustConsolePosition);
    };
  }, []);

  return null;
}

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <VConsoleWrapper/>
            <RemixBrowser/>

        </StrictMode>
    );
});
