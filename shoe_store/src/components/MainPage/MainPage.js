import React from 'react';
import Banner from '../Banner/Banner';
import sandals_myer from '../../img/products/sandals_myer.jpg';
import sandals_keira from '../../img/products/sandals_keira.jpg';
import superhero_sneakers from '../../img/products/superhero_sneakers.jpg';
import TopSales from '../TopSales/TopSales';

/**
 * Компонент рендерит главную страницу магазина
 */
export default function MainPage() {
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner />
                    <TopSales />
                    {/* <section className="top-sales">
                        <h2 className="text-center"><TopSales /></h2>
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <img src={sandals_myer}
                                        className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                    <div className="card-body">
                                        <p className="card-text">Босоножки 'MYER'</p>
                                        <p className="card-text">34 000 руб.</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <img src={sandals_keira}
                                        className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                                    <div className="card-body">
                                        <p className="card-text">Босоножки 'Keira'</p>
                                        <p className="card-text">7 600 руб.</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <img src={superhero_sneakers}
                                        className="card-img-top img-fluid" alt="Супергеройские кеды" />
                                    <div className="card-body">
                                        <p className="card-text">Супергеройские кеды</p>
                                        <p className="card-text">1 400 руб.</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>
                        <ul className="catalog-categories nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="a">Все</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="a">Женская обувь</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="a">Мужская обувь</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="a">Обувь унисекс</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="a">Детская обувь</a>
                            </li>
                        </ul>
                        <div className="row">
                            <div className="col-4">
                                <div className="card catalog-item-card">
                                    <img src={sandals_myer}
                                        className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                    <div className="card-body">
                                        <p className="card-text">Босоножки 'MYER'</p>
                                        <p className="card-text">34 000 руб.</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card catalog-item-card">
                                    <img src={sandals_keira}
                                        className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                                    <div className="card-body">
                                        <p className="card-text">Босоножки 'Keira'</p>
                                        <p className="card-text">7 600 руб.</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card catalog-item-card">
                                    <img src={superhero_sneakers}
                                        className="card-img-top img-fluid" alt="Супергеройские кеды" />
                                    <div className="card-body">
                                        <p className="card-text">Супергеройские кеды</p>
                                        <p className="card-text">1 400 руб.</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card catalog-item-card">
                                    <img src={sandals_myer}
                                        className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                    <div className="card-body">
                                        <p className="card-text">Босоножки 'MYER'</p>
                                        <p className="card-text">34 000 руб.</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card catalog-item-card">
                                    <img src={sandals_keira}
                                        className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                                    <div className="card-body">
                                        <p className="card-text">Босоножки 'Keira'</p>
                                        <p className="card-text">7 600 руб.</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card catalog-item-card">
                                    <img src={superhero_sneakers}
                                        className="card-img-top img-fluid" alt="Супергеройские кеды" />
                                    <div className="card-body">
                                        <p className="card-text">Супергеройские кеды</p>
                                        <p className="card-text">1 400 руб.</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-outline-primary">Загрузить ещё</button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
