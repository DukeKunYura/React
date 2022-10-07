import React from 'react';
import Banner from '../Banner/Banner';
import Catalog from '../Catalog/Catalog';

/**
 * Компонент рендерит страницу "Каталог"
 */
export default function CatalogPage() {
    return (
        <main className="container" >
            <div className="row">
                <div className="col">
                    <Banner />
                    <Catalog />
                </div>
            </div>
        </main>
    )
}
