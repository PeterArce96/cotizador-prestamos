const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN'
    });
    return formatter.format(valor)
}

export {
    formatearDinero
}