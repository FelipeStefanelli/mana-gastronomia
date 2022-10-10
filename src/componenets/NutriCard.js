import React from 'react';

function NutriCard(props) {
    const product = props.product;
    return (
        <div className="nutri-info-container mb-5" id={props.id}>
            <p className='h3 mb-3'><strong>{product.name}</strong></p>
            {props.id % 2 === 0 ?
                <div className='mb-3'>
                    <div className='nutri-table'>
                        <div className='table-row'>
                            <div className='table-col col-4 m-0'>Quantidade por porção</div>
                            <div className='table-col col-6 m-0'>{product.portionText}</div>
                            <div className='table-col col-2 m-0'>%VD(*)</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Valor Energético</div>
                            <div className='table-col col-6'>{product.tableValues.valorE.value}</div>
                            <div className='table-col col-2'>{product.tableValues.valorE.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Carboidratos</div>
                            <div className='table-col col-6'>{product.tableValues.carb.value}</div>
                            <div className='table-col col-2'>{product.tableValues.carb.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Proteínas</div>
                            <div className='table-col col-6'>{product.tableValues.prot.value}</div>
                            <div className='table-col col-2'>{product.tableValues.prot.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Gorduras totais</div>
                            <div className='table-col col-6'>{product.tableValues.gordTotais.value}</div>
                            <div className='table-col col-2'>{product.tableValues.gordTotais.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Gorduras saturadas</div>
                            <div className='table-col col-6'>{product.tableValues.gordS.value}</div>
                            <div className='table-col col-2'>{product.tableValues.gordS.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Gorduras trans</div>
                            <div className='table-col col-6'>{product.tableValues.gordTrans.value}</div>
                            <div className='table-col col-2'>{product.tableValues.gordTrans.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Fibra alimentar</div>
                            <div className='table-col col-6'>{product.tableValues.fibraA.value}</div>
                            <div className='table-col col-2'>{product.tableValues.fibraA.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Sódio</div>
                            <div className='table-col col-6'>{product.tableValues.sodio.value}</div>
                            <div className='table-col col-2'>{product.tableValues.sodio.porcentage}</div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img
                            className='nutri-image'
                            src={product.image}
                            alt='caldo-abobora'
                        />
                    </div>
                </div>
                :
                <div className='mb-3'>
                    <div className='d-flex align-items-center'>
                        <img
                            className='nutri-image'
                            src={product.image}
                            alt='caldo-abobora'
                        />
                    </div>
                    <div className='nutri-table'>
                        <div className='table-row'>
                            <div className='table-col col-4 m-0'>Quantidade por porção</div>
                            <div className='table-col col-6 m-0'>{product.portionText}</div>
                            <div className='table-col col-2 m-0'>%VD(*)</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Valor Energético</div>
                            <div className='table-col col-6'>{product.tableValues.valorE.value}</div>
                            <div className='table-col col-2'>{product.tableValues.valorE.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Carboidratos</div>
                            <div className='table-col col-6'>{product.tableValues.carb.value}</div>
                            <div className='table-col col-2'>{product.tableValues.carb.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Proteínas</div>
                            <div className='table-col col-6'>{product.tableValues.prot.value}</div>
                            <div className='table-col col-2'>{product.tableValues.prot.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Gorduras totais</div>
                            <div className='table-col col-6'>{product.tableValues.gordTotais.value}</div>
                            <div className='table-col col-2'>{product.tableValues.gordTotais.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Gorduras saturadas</div>
                            <div className='table-col col-6'>{product.tableValues.gordS.value}</div>
                            <div className='table-col col-2'>{product.tableValues.gordS.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Gorduras trans</div>
                            <div className='table-col col-6'>{product.tableValues.gordTrans.value}</div>
                            <div className='table-col col-2'>{product.tableValues.gordTrans.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Fibra alimentar</div>
                            <div className='table-col col-6'>{product.tableValues.fibraA.value}</div>
                            <div className='table-col col-2'>{product.tableValues.fibraA.porcentage}</div>
                        </div>
                        <div className='table-row'>
                            <div className='table-col col-4'>Sódio</div>
                            <div className='table-col col-6'>{product.tableValues.sodio.value}</div>
                            <div className='table-col col-2'>{product.tableValues.sodio.porcentage}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default NutriCard;
