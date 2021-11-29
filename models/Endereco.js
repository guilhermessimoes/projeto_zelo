module.exports = (sequelize, DataTypes) =>{
    const Endereco = sequelize.define("Endereco", {
        cep: DataTypes.STRING(40),
        logradouro: DataTypes.STRING(40),
        numero: DataTypes.STRING(20),
        cidade: DataTypes.STRING (40),
        estado: DataTypes.STRING (40),
        bairro: DataTypes.STRING (40),
        complemento: DataTypes.STRING(40)
    },{
        tableName: "enderecos",
        timestamps: true,
        paranmoid: true
    });

    //Endereco.associate = (models) => {
    //    Endereco.belongsTo(models.Usuario, { foreignKey: "usuario_id", as: 'usuario' });
    //}

    return Endereco
}