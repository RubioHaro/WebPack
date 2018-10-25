const waitTime = new Promise((success, error) => {
    setTimeout(()=>{
        success('Han pasado 3 segundos, omg')
    }, 3000)
})


var messages = {
    firstMessage: 'Rubio Haro Rodrigo R.',
    errorMessage: async () =>{
        const message = await waitTime;
        console.log(message);
        alert(message);
    }
}
export {messages};