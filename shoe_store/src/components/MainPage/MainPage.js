import React from 'react'

export default function MainPage() {
    return (
        <main className="container">
            main
            {/* <div class="row">
                <div class="col">
                    <div class="banner">
                        <img src="./img/banner.jpg" class="img-fluid" alt="К весне готовы!" />
                        <h2 class="banner-header">К весне готовы!</h2>
                    </div>
                    <section class="top-sales">
                        <h2 class="text-center">Хиты продаж!</h2>
                        <div class="row">
                            <div class="col-4">
                                <div class="card">
                                    <img src="./img/products/sandals_myer.jpg"
                                        class="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                    <div class="card-body">
                                        <p class="card-text">Босоножки 'MYER'</p>
                                        <p class="card-text">34 000 руб.</p>
                                        <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <img src="./img/products/sandals_keira.jpg"
                                        class="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                                    <div class="card-body">
                                        <p class="card-text">Босоножки 'Keira'</p>
                                        <p class="card-text">7 600 руб.</p>
                                        <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <img src="./img/products/superhero_sneakers.jpg"
                                        class="card-img-top img-fluid" alt="Супергеройские кеды" />
                                    <div class="card-body">
                                        <p class="card-text">Супергеройские кеды</p>
                                        <p class="card-text">1 400 руб.</p>
                                        <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="catalog">
                        <h2 class="text-center">Каталог</h2>
                        <ul class="catalog-categories nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Все</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Женская обувь</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Мужская обувь</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Обувь унисекс</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Детская обувь</a>
                            </li>
                        </ul>
                        <div class="row">
                            <div class="col-4">
                                <div class="card catalog-item-card">
                                    <img src="./img/products/sandals_myer.jpg"
                                        class="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                    <div class="card-body">
                                        <p class="card-text">Босоножки 'MYER'</p>
                                        <p class="card-text">34 000 руб.</p>
                                        <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card catalog-item-card">
                                    <img src="./img/products/sandals_keira.jpg"
                                        class="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                                    <div class="card-body">
                                        <p class="card-text">Босоножки 'Keira'</p>
                                        <p class="card-text">7 600 руб.</p>
                                        <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card catalog-item-card">
                                    <img src="./img/products/superhero_sneakers.jpg"
                                        class="card-img-top img-fluid" alt="Супергеройские кеды" />
                                    <div class="card-body">
                                        <p class="card-text">Супергеройские кеды</p>
                                        <p class="card-text">1 400 руб.</p>
                                        <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card catalog-item-card">
                                    <img src="./img/products/sandals_myer.jpg"
                                        class="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                    <div class="card-body">
                                        <p class="card-text">Босоножки 'MYER'</p>
                                        <p class="card-text">34 000 руб.</p>
                                        <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card catalog-item-card">
                                    <img src="./img/products/sandals_keira.jpg"
                                        class="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                                    <div class="card-body">
                                        <p class="card-text">Босоножки 'Keira'</p>
                                        <p class="card-text">7 600 руб.</p>
                                        <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card catalog-item-card">
                                    <img src="./img/products/superhero_sneakers.jpg"
                                        class="card-img-top img-fluid" alt="Супергеройские кеды" />
                                    <div class="card-body">
                                        <p class="card-text">Супергеройские кеды</p>
                                        <p class="card-text">1 400 руб.</p>
                                        <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-outline-primary">Загрузить ещё</button>
                        </div>
                    </section>
                </div>
            </div> */}
        </main>
    )
}
