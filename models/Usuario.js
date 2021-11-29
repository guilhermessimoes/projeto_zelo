module.exports = (sequelize, DataTypes) =>{
    const Usuario = sequelize.define("Usuario", {
        nome: DataTypes.STRING(40),
        email: DataTypes.STRING(40),
        senha: DataTypes.STRING(20)
    },{
        tableName: "usuarios",
        timestamps: true,
        paranmoid: true
    });
    
   // Usuario.associate = (models) => {
   //     Usuario.hasMany(models.Endereco, { foreignKey: "usuario_id", as: 'enderecos' });
   // }

    return Usuario
}