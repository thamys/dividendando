import moment from 'moment';

export const transactionColumns = [
    {
        title: 'Ativo',
        dataIndex: 'stock',
        key: 'stock',
    },
    {
        title: 'Data',
        dataIndex: 'date',
        key: 'date',
        render: (date: number) => moment(date).format('DD/MM/YYYY') 
    },
    {
        title: 'Tipo',
        dataIndex: 'type',
        key: 'type',
        render: (type: number) => 0 ? 'COMPRA' : 'VENDA'
    },
    {
        title: 'Quantidade',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Valor',
        dataIndex: 'price',
        key: 'price',
        render: (price: number) => (price/ 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
]