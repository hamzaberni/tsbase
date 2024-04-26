<script lang="ts">
import { onMount } from 'svelte'
  import { number } from 'zod';

let hotel = [
  { id: 1, name: "Hotel Whatever", pricePerNightInUSD: 100 },
  { id: 2, name: "Hotel Whichever", pricePerNightInUSD: 200 },
  { id: 3, name: "Hotel Whoknowswhich", pricePerNightInUSD: 300 },
  { id: 4, name: "Hotel Whatelse", pricePerNightInUSD: 400 },
  { id: 5, name: "Hotel Something", pricePerNightInUSD: 400 },
  { id: 6, name: "Hotel Someotherthing", pricePerNightInUSD: 400 },
]

let search = ''
let hotelPrice: number | null = null
let showPrice: boolean
let selectedHotel: { pricePerNightInUSD: any; id?: number; name?: string; } | null = null
let findHotel: { pricePerNightInUSD: any; id?: number | undefined; name?: string | undefined; } | null | undefined = null


/*const filteredHotel = (search: string) => {
    return hotel.filter(hotel =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.pricePerNightInUSD.toString().includes(search)
    )
}*/

const showPriceButton = (hotel: { id: number; name: string; pricePerNightInUSD: number; }) => {
  showPrice = !showPrice
  selectedHotel = hotel
}

onMount(() => {
    selectedHotel = hotel[0]
})

const searchedHotel = () => {
    findHotel = hotel.find(hotel => hotel.name.toLowerCase().includes(search.toLowerCase()))
    selectedHotel = findHotel
}


</script>

<main>
  <div class="h-screen w-screen bg-cyan-700">
    <input type="text" bind:value={search} placeholder="Search" class="bg-sky-100 text-white font-serif font-bold hover:bg-blue-950 border-solid border-2 border-blue-950 hover:border-sky-100 transition duration-300 p-3 m-2 rounded ">
    <button class="bg-cyan-700 text-white font-serif font-bold hover:bg-blue-950 border-solid border-2 border-blue-950 transition duration-300 p-3 m-2 rounded py-2 px-5">OK</button>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 p-3 m-3">
      {#each hotel as hotel}
        <div class="bg-sky-100 rounded-lg shadow-lg p-6" >
          <h3 class="text-xl text-black font-serif font-semibold mb-2">{hotel.name}</h3>
          <button on:click={() => showPriceButton(hotel)} class="bg-cyan-700 text-white font-serif font-bold hover:bg-blue-950 border-solid border-2 border-blue-950 transition duration-300 p-3 m-2 rounded py-5 px-10">Price
          </button>
          {#if showPrice && selectedHotel === hotel}
          <div class="mt-4"> 
            <p>${selectedHotel.pricePerNightInUSD} / éjszaka</p>
          </div>
          {/if}
        </div>
      {/each}
    </div> 
    {#if findHotel !== null}
      <div class=""> 
        <p>${findHotel!.name}</p>
        <p>${findHotel!.pricePerNightInUSD} /éjszaka</p>       
      </div>
    {/if} 
  </div>

</main>
