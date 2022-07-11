import React from 'react'
import Input from './Input'

export default function ItemModalCreation() {
  return (
    <div class="personalized-modal modal fade fixed top-0 left-0 block w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" role="dialog">
      <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div class="personalized-modal-content modal-content border-none shadow-lg relative flex flex-col pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-[#9CB8FF]" id="exampleModalScrollableLabel">
              Modal title
            </h5>
            <button type="button"
              class="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body relative p-4 text-white ">
            <Input />
          </div>
          <div
            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button type="button"
              class="inline-block px-6 py-2.5 bg-[#f87d7d] text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button"
              class="inline-block px-6 py-2.5 bg-[#9CB8FF] text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
              Add item
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
