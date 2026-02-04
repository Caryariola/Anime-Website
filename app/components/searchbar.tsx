import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

export default function SearchBar(props : any) {
    return(
        <>
        <form onSubmit={props.handleSearch} className="flex gap-2 items-center">
      
      
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText 
          value={props.searchText} 
          onChange={(e) => props.setSearchText(e.target.value)}
          placeholder="Search for an anime..."
          className="p-inputtext-sm w-64 rounded-full" 
         
        />
      </IconField>

     
      <Button 
        label="Search" 
        type="submit" 
        icon="pi pi-arrow-right" 
        iconPos="right"
        loading={props.isLoading} 
        className="p-button-sm p-button-rounded"
      />
      
    </form>
        </>
    )
}