const TituloSecundario = ({comision, anioActualProps}) => {
return (
<section>
<h2>Titulo generado con props de la comisión: {comision}</h2>
<p>Año actual: {anioActualProps}</p>
</section>
);
};

export default TituloSecundario;
