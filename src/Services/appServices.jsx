import React, { useEffect, useState } from 'react';

const baseUrl = "http://localhost:1337" ;

const GetData = (endUrl) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Request-Headers", "*");
    myHeaders.append("Access-Control-Request-Method", "*");
    myHeaders.append("accept", "*/*");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const [state, setState] = useState("");

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (await fetch(`${baseUrl}/${endUrl}`, requestOptions)).json()
            setState(data);
        };

        dataFetch();

    }, [endUrl]);

    return { data: state };
};

export default GetData;