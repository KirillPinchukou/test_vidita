import { useDocuments1Query, useDisableOrdersMutation } from 'api/api';
import React, { useState } from 'react'
import { DataGrid, GridSelectionModel  } from '@mui/x-data-grid';
import AlertDialog from 'components/Popup';

export default function OrderTable() {
    const { data } = useDocuments1Query('');
    const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
    const [disablePost] = useDisableOrdersMutation()
    let totalV: number = 0;
    let totalQ: number = 0;

    const result = data?.map((item) => {
        totalV += item.volume;
        totalQ += item.qty
        return {
            id: item.id,
            name: item.name,
            sum: item.sum,
            status: item.status,
            qty: item.qty,
            volume: item.volume,
            currency: item.currency,
            delivery_date: item.delivery_date,
            total: `${item.sum * item.qty} (${item.currency})`
        }
    })
 
    const tableColumns = [
        {title: "id", field:"id"},
        {title: "name", field:"name"},
        {title: "sum", field:"sum"},
        {title: "status", field: "status"},
        {title: "qty", field:"qty"},
        {title: "volume", field:"volume"},
        {title: "currency", field:"currency"},
        {title: "delivery_date", field: "delivery_date"},
        {title: "total", field: "total"}
    ]

    const handleArchiveOrders = () => {
     const payload = selectionModel.join(',')
        disablePost(payload)
    }

    return (
        <div style={{ height: 600, width: 'auto' }}>
            <DataGrid
                rows={result? result :[]}
                columns={tableColumns}
                checkboxSelection
                onSelectionModelChange={(newSelectionModel) => {
                    setSelectionModel(newSelectionModel)
                  }}
                  selectionModel={selectionModel}
                initialState={{
                    sorting: {
                      sortModel: [{ field: 'delivery_date', sort: 'asc' }],
                    },
                  }}
            />
            <div className='footer' style={{display: "flex",justifyContent: "right"}}>
              total volume:{totalV}, total qty:{totalQ}
            </div>
            <AlertDialog onArchiveOrders={handleArchiveOrders}/>
        </div>
    );
}