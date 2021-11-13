const ServicioGet = (req, res) => {
    res.json({ msg: "get Servicio controller" });
}

const ServicioPost = (req, res) => {
    const { name, author } = req.body;

    res.json({ msg: "Post Servicio controller", nombre_Servicio });
}

const ServicioGetBy_id = (req, res) => {
    res.json({ msg: "get by _id Servicio controller" });
}

const ServicioPut = (req, res) => {
    res.json({ msg: "put Servicio controller" });
}

const ServicioDelete = (req, res) => {
    res.json({ msg: "delete Servicio controller" });
}

module.exports = {
    ServicioGet,
    ServicioPost,
    ServicioGetBy_id,
    ServicioPut,
    ServicioDelete
}