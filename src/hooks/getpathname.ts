import { ref } from 'vue';

import headerLogoImage_ from '@/assets/images/ComponetsIcon_.png';
import headerLogoImage from '@/assets/images/ComponetsIcon_white.png';

const headerLogo = ref<string>(headerLogoImage);


const isIndex = ref<boolean>(true);

function setIsIndex(value: boolean) {
    isIndex.value = value;
}

function getIsIndex(): boolean {
    return isIndex.value;
}

function getHeaderLogo(): string {
    return headerLogo.value;
}

function getPathName(path: string) {

    isIndex.value = !(path === '/');
    headerLogo.value = isIndex.value
        ? headerLogoImage_
        : headerLogoImage
}

export {
    getPathName, getIsIndex, setIsIndex, getHeaderLogo
}
