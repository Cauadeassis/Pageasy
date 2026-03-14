"use client";

import { useState, useEffect } from "react";
import calculatePrice, { Page } from "../../script";
import styles from "./styles.module.scss";

export default function BudgetSimulator() {
  const [quantity, setQuantity] = useState(1);
  const [page, setPage] = useState<Page>("institutional");
  const price = calculatePrice({ quantity, page });
  return (
    <section id="orcamento" className={styles.budgetSimulator}>
      <h2>Simulador de Orçamento</h2>
      <div>
        <label>
          Quantidade
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(event) =>
              setQuantity(Math.max(1, Number(event.target.value)))
            }
          />
        </label>
        <label>
          Página
          <select
            value={page}
            onChange={(event) => setPage(event.target.value as Page)}
          >
            <option value="institutional">Institucional</option>
            <option value="multi-institutional">Multi Institucional</option>
            <option value="web-application">Aplicação Web</option>
          </select>
        </label>
      </div>
      <div className={styles.priceContainer}>
        <span>Total estimado</span>
        R$ {price.toLocaleString("pt-BR")}
      </div>
    </section>
  );
}
