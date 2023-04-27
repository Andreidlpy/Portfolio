import { ref } from 'vue'


const useIcons = () => {

  

    const getUrl = (  url? :any , filename = 'skillsIcons' ) => {
       
        return new URL(`../assets/${filename}/${url}`, import.meta.url).href
    }
    return {
        getUrl
    }
}

export default useIcons
