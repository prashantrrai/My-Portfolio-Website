import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

const MyUsers = () => {

  const [data, setData] = useState([])

  function getData(){
    axios.get("https://6331e2233ea4956cfb692ca9.mockapi.io/Portfolio-Website")
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }

    useEffect(() => {
      getData()
    
    }, [])
    
  // getData()

    function handleDelete(id) {
      axios.delete(`https://6331e2233ea4956cfb692ca9.mockapi.io/Portfolio-Website/${id}`
      ).then(() => {
        getData()
      })
    }


  return (
    <>
        <Navbar/>

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg m-8">
        <table class="w-full text-lg text-left text-gray-100 dark:text-gray-900">

        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
            <tr>
              <th scope="col" class="py-3 px-6">id</th>
              <th scope="col" class="py-3 px-6">Name</th>
              <th scope="col" class="py-3 px-6">Email</th>
              <th scope="col" class="py-3 px-6">Message</th>
              <th scope="col" class="py-3 px-6">Remove</th>
              <th scope="col" class="py-3 px-6" >Contact</th>
            </tr>
          </thead>


          { data.map((eachData) => {
              return(
                <>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-purple-600 dark:border-gray-100">
                        
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{eachData.id}</th>
                        <td>{eachData.name}</td>
                        <td>{eachData.email}</td>
                        <td>{eachData.message}</td>
                        <td>
                          <button class="font-medium  dark:text-gray-100 hover:underline hover:text-gray-900 focus:" onClick={handleDelete(eachData.id)}>Delete
                          </button>
                        </td>
                        <td>
                          <button class="font-medium  dark:text-gray-100 hover:underline hover:text-gray-900 focus:">Send Mail
                          </button>
                        </td>
                      </tr>
                    </tbody>
                </>
              )
          })
        }
            
        </table>
        </div>



    </>
  )
}

export default MyUsers