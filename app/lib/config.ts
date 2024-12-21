export const pathConfig: { [key: string]: (arg0: string) => boolean } = {
    home: (path: string) => path.split('/')[3] == "home" || path.split('/')[2] == "home",
    about: (path: string) => path.split('/')[3] == "about" || path.split('/')[2] == "about",
};
