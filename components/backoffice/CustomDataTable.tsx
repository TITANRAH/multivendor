"use client";

import { useState } from "react";
import data from "../../data-custom/data.json";
import { Button } from "../ui/button";

function CustomDataTable() {
  // establezco un page size fijo en este caso 10
  const PAGE_SIZE = 10;

  //   declaro un state de 1
  const [currentPage, setCurrentPage] = useState<number>(1);

  // starindex es el primer elemento de lo que se mostrara hasta el ultimo elemento
  // en este caso en la primera carga de la vista si currentPage es 1 como se declaro en el state
  // seria 1 - 1 = 0 multiplicado por 10 , osea 0 * 10 = 0 lo que signfica que el primer
  // elemento a mostrar del arreglo en la primera carga de la vista es el elemento 0
  // qye en un arreglo corresponde al primer elemento osea el elemento 1
  // si currentPage fuera 2 (eso se hace en la funcion del bton next donde se le suma 1 al currentpage)
  // seria 2 - 1 = 1  y 1 * 10 = 10 quiere decir que esta vez startindex partiria en 10 y como primer elemento
  const startIndex = (currentPage - 1) * PAGE_SIZE;

  //   en la primera carga de vista el end index es igual a startindex (0) + pagesize (10)
  // por lo tanto el final del arreglo llegara hasta 10 quiere decir 9 en un arreglo por lo que en la primera carga
  // el star index seria 0 (1 en la vista de un arreglo) y terminaria en endindex (10 en la vista de un arreglo)

  const endIndex = startIndex + PAGE_SIZE;

  //   luego el currentDisplayData es quien envuelve esta logica de variables y finalmente el que muestra mapeando el indeice
  //   de 0 a 10 la primera vez luego de 11 a 20 y asi sucesivamente
  const currentDisplayData = data.slice(startIndex, endIndex);

  //   sacamos el numero de paginas dividiendo el numero inicial por la data total pasando por el mathceil para mayor precision
  // nos sirve para deshabilitar el boton en caso de que el currentpage sea igual al resultado de esta dividision
  // si es igual desabilitar boton
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  function handlePageChange(page: number) {
    setCurrentPage(page);
    console.log(page);
  }

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4 mt-4 dark:text-slate-50">Recent Orders</h2>

      {/* table */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* esta variable currentDisplayData es corta el arreglo con slice de 0 a 10 por ejem y esta definida arriba */}
            {currentDisplayData.map((item, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <td className="px-6 py-4">{item.id}</td>

                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.first_name}
                </th>
                <td className="px-6 py-4">{item.last_name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-slate-800  dark:text-white">
              {PAGE_SIZE * currentPage}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-800 dark:text-white">
              {data.length}
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <Button
                disabled={currentPage == 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </Button>
            </li>

            {/* arreglo formado de total page 
                index + 1 en pagina 0 es 1 
                currentPage en la pagina 0 es 1 
                si son iguales el boton se deshabilita
                */}
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <Button
                  //   si estoy en el indice 0 mas 1 es 1 por loq ue currentPage es 1
                  onClick={() => handlePageChange(index + 1)}
                  disabled={currentPage === index + 1}
                  className={
                    currentPage === index + 1
                      ? "flex h-10 items-center ml-1 mr-1 justify-center px-3 leading-tight text-white bg-blue-600 border border-blue-300 hover:bg-blue-800 hover:text-white dark:bg-lime-800 dark:border-lime-600 dark:hover:bg-gray-700 dark:hover:text-white"
                      : "flex h-10 items-center ml-1 mr-1 justify-center px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                >
                  {index + 1}
                </Button>
              </li>
            ))}
            <li>
              <Button
                disabled={currentPage == totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default CustomDataTable;
