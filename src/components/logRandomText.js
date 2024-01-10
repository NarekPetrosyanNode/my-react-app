export default function LogRandomText() {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur distinctio eos error iste molestias nesciunt obcaecati pariatur similique tempore. Error expedita facere ipsa minus, natus odit reiciendis tempore veritatis.'
    return (
            <button onMouseOver={() =>  console.log(text.substring(Math.floor(Math.random() * 5), Math.floor(Math.random() * text.length + 10)))}>LogRandomText</button>
    )
}