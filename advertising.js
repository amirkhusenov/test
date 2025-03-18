async function fetchData() {
    const resp = await fetch('https://62c6f5e76c899185.mokky.dev/advertisement-info/1');
    const data = await resp.json();

    if (!resp.ok) {
        throw new Error(data.message || 'Something went wrong');
    }

    return data;
}

async function fetchRedirectData() {
    try {

        let data = await fetchData();
        console.log('input', data)
        data.redirects_qty++;

        const resp = await fetch('https://62c6f5e76c899185.mokky.dev/advertisement-info/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });


        const obj = await resp.json();

        console.log('output', obj);
    } catch (error) {
        console.error(error);
    }
}



const btns = document.querySelectorAll('.advertisement');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        fetchRedirectData();
    });
});