<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\DB;
// use Intervention\Image\Facades\Image;
use App\User;
use App\Question;
use App\Solution;

class MobileController extends Controller
{
	public function showAppName()
    {
    	return "Getting started with back end";
    }
    // function to create user account
    public function saveUser(Request $request)
    {
    	$requestArray = $request->all();
		$user = new User();
		$user['name'] = $requestArray['userName'];
		$user['details'] = $requestArray['bio'];
		$user['contact'] = $requestArray['mobileNo'];
		$user['email'] = $requestArray['email'];
		$user['password'] = $requestArray['password'];

		$imgExe = $requestArray['imgExe'];
        $imgFullName = time().".".$imgExe;
		$base64ImgData = $requestArray['profileImageData'];
		$fullPath = public_path('images')."/".$imgFullName;
		\File::put($fullPath, base64_decode($base64ImgData));

		$user['image_path'] = $fullPath; 
		$user->save();

		return "Account Created";
    }

   	
   	//functions to get display details for questions in  database
   	//function to change 'key' name. we change the 'key' of questions array
    public function replaceKey($array, $curkey, $newkey)
	{   $array[$newkey] = $array[$curkey];
        unset($array[$curkey]);
        return true; 
	}
	//to find username name from user_id
	public function findUserName($questionArray)
	{	$user = new User();
		foreach ($questionArray as &$i) 
		{	$user_id = $i['user_id'];		
			$user_name = $user->where('id',$user_id)->select('name')->get();
			$user_name = $user_name[0]['name'];
			$this->replaceKey($i, "user_id", "user_name");
            $i['user_name']=$user_name;
		}
	}
	//to find solution count for each question
	public function countSolution($questionArray)
	{	    $sol = new Solution();
    		$qListInSol = $sol->select('id','q_id')->get();
			foreach ($questionArray as &$i)
    		{	$q_id=$i['id'];
                $solList=array();
                $solListIndex=0;
    			foreach ($qListInSol as $j) 
    			{    if($q_id==$j['q_id'])
    					$solList[$solListIndex++]=$j['id'];
    			}
                $i["solList"]=$solList;
    		}	
	}
	//combining the above three functions and getting the final question array
    public function showAllQuestions()
    {	try
        {   $question = new Question;
            $questionArray=$question->select('id','user_id','title','votes','created_at')->get();
    		$this->findUserName($questionArray);
    		$this->countSolution($questionArray);
    		return $questionArray;
    	}
    	catch(Exception $e){
    		return "Questions not fetched exception = ".$e;
    	}
    }
    //get soltion detals
    public function sol_details($sol_id)
    {
        $sol = new Solution();
        $sol_array=$sol->where('id',$sol_id)->select('explain','votes','user_id','created_at')->get();
        $this->findUserName($sol_array);
        return $sol_array[0];
    }
    //to details details regarding the selected question
    public function q_details(Request $request)
    {
        try 
        {
            $requestArray = $request->all();
            $q_id=$requestArray['question_id'];
            $sol_ids=$requestArray['solution_ids'];
            //get question- title, body, votes, aseked date, user id
            $question = new Question();
            $send_data=$question->where('id',$q_id)->select('title','body','votes','created_at','user_id')->get(); 
            $this->findUserName($send_data);

            $sol_index=0;
            $x=array();
            foreach ($sol_ids as $i) 
            {
                $x[$sol_index]=$this->sol_details($i);
                $sol_index=$sol_index+1;
            }
            $send_data[1]=$x;
            return $send_data;   
        } 
        catch (Exception $e) {
            return "Question details not fetched exception = ".$e;   
        }
    }
    //verify user credentials
    public function verifyUser(Request $req)
    {
        try 
        {
            $requestArray = $req->has('username');
            $requestUrl = $req->url();
            if($requestArray){
                return $requestArray;  
            }
            else{
                return 0;
            }
        } 
        catch (Exception $e) {
            return "Error verifying User = ".$e;   
        }
    }
}