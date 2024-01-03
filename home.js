function Home (){
    return (
        <center><Card
            bgcolor="warning"
            txtcolor="black"
            header="The Bad Bank"
            title="Welcome to the Bad Bank"
            text="The best bank, with the worst secruity"
            body={(<img src ="bank.png" className="img-fluid" alt="Responsive image"/>)}
        /></center>
    );
}