import React from 'react';
import Banner from '../Banner/Banner';
import Catalog from '../Catalog/Catalog';
import Search from '../Search/Search';

/**
 * Компонент рендерит страницу "Каталог"
 */
export default function CatalogPage() {

    return (
        <main className="container" >
            <div className="row">
                <div className="col">
                    <Banner />
                    <Catalog>
                        <Search />
                    </Catalog>
                </div>
            </div>
        </main>
    )
}
