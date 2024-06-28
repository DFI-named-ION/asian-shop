export default function AcceptRedirect(props) {
    console.log("Hooked!");

    const {params, setParams} = props;

    const urlParams = new URLSearchParams(window.location.search);
    console.log(`Count of parameters: ${urlParams.toString().split('&').length}`);
    for (const [key, value] of urlParams.entries()) {
        console.log(`${key}: ${value}`);
        setParams([...params].push(`${window.location.search}: ${key}: ${value}`));
    };
};