import axios from "axios"
import { useEffect, useState } from "react"

const useFood = (deleteHambuger,reload) => {

    const [foods, setFood] = useState()

    useEffect(() => {
        const URL = 'https://script.google.com/macros/s/AKfycbxGKYMnB_7_fFe9jCDewpHQ-nviPCCDUKHiV2OazSyUYSYxWQPQHggLV6cKl8cpJ7sVbA/exec?action=data'
        axios.get(URL)
            .then(({ data }) => setFood(data))
            .catch(err => console.log(err))
    }, [deleteHambuger,reload])
  return foods
}

export default useFood