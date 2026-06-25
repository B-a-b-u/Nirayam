const Service = async (
    {params} : {params : Promise<{service:String}>} ) => {

    const {service} = await params;
    return(
        <div>
            <h1>{service}</h1>
        </div>
    )
}

export default Service;