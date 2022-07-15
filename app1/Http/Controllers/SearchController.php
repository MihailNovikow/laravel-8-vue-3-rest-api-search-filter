<?php
namespace App\Http\Controllers;
use App\Models\Equipment;
use Illuminate\Http\Request;
//use Facades\App\Repository\Equipments;

class SearchController extends Controller
/*{
    public function index()
    {   
        return view('search');
    }
    public function search(Request $request)
    {
        $equipments=Equipment::where('serialnum',$request->keywords)->get();
        return response()->json($equipments);
         
    }
    }
*/
{
    //
    public function search(Request $request)
    {
        $query = $request->query('query');
        $equipments = Equipment::where('serialnum', 'like', '%' . $query . '%')
           // ->orWhere('description', 'like', '%' . $query . '%')
            ->get();

        //broadcast search results with Pusher channels
        event(new SearchEvent($equipments));

        return response()->json("ok");
    }

    //fetch all Equipments
    public function get(Request $request)
    {
        $equipments = Equipment::all();
        return response()->json($equipments);
    }
}
