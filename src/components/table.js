import React from 'react';
import '../css/table.css'

export default function Table ({data, func}) {
    const keys = Object.keys(data[0])
    return(
        <table id="table" class="display" style={{width:"100%"}}>
            <thead id='head'>
                <tr>
                    {keys.map((item)=>{
                        return(
                            <th>{item.toUpperCase()}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>{
                    return(
                        <tr onClick={()=>{func(item)}}>
                            {Object.values(item).map((i)=>{
                                return(
                                    <td>{i}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
