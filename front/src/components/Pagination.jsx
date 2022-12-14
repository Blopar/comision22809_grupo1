import React from 'react'

export const Pagination = ({phonePerPage, currentPage ,setCurrentPage, totalPhones}) =>{
    const pageNumbers = []
    console.log(currentPage)
    for(let i =1 ; i<= Math.ceil(totalPhones/phonePerPage);i++){
        pageNumbers.push(i) 
    }

    const onPreviusPage =() =>{
        setCurrentPage (currentPage - 1 )
    }
    const onNextPage =() =>{
        setCurrentPage (currentPage + 1 )
    }
    const onSpecificPage = (n) =>{
        setCurrentPage(n)
    }
    
  return (
                
            <nav >
            <ul className="pagination justify-content-center ">
                <li className={`page-item  ${currentPage === 1 ? 'disabled': ''}`}>
                <span className="page-link" onClick={onPreviusPage}>Anterior</span>
                </li>

                {pageNumbers.map(noPage => (

                    <li className={`page-item ${noPage === currentPage ? 'active' : ''}`} onClick={()=> onSpecificPage(noPage)} >
                    <a className="page-link" >{noPage}</a>
                   
                    </li>

                ))}
       
                <li className= {`page-item  ${currentPage >= pageNumbers.length ? 'disabled': ''}`}>
                <a className="page-link"  onClick ={ onNextPage} >Siguiente</a>
                </li>
            </ul>
            </nav>

  )
}

