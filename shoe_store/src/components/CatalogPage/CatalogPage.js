import React from 'react';
import Banner from '../Banner/Banner';

/**
 * Компонент рендерит страницу "Каталог"
 */
export default function CatalogPage() {
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner />
                    <section className="top-sales">
                        <h2 className="text-center">Страница в разработке</h2>
                        <p>
                            Извините, страница не готова!
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}
