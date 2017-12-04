import '../styles/image_view.css';

export  default () => {
    const image = document.createElement('img');

    image.src = "https://avatars2.githubusercontent.com/u/33776674?s=64&v=4";

    document.body.appendChild(image);
}