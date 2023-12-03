import { auth } from "@clerk/nextjs"
import Dropzone from "@/components/Dropzone"
function Dasboard() {
    const { userId } = auth();
    return (
        <div>
            <Dropzone />
        </div>
    )
}


export default Dasboard