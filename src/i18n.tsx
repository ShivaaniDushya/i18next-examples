import i18next from "i18next";

i18next.init({
    lng: "en",
    resources: {}
});

export function addResources(language: string, namespace: string, data: any) {
    return i18next.addResources(language, namespace, data);
}

export function translation(namespace: string, name: string) {
    return i18next.t(namespace + ":" + name);
}

export default i18next;