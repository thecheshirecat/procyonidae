<?php
	//Script to connect to DB
	//Connection to DB
	function connectDB() {
		$link = mysqli_connect("localhost", "root", "45674567", "procyonidae") or die ("Error ".mysqli_error($link));
		return $link;
	}
	//Make a query to consult
	function dbQuery($query) {
		//Connect to DB
		$connexion = connectDB();
		//Make the query
		$queryResult = mysqli_query($connexion, $query);

		$result = array();
		if($queryResult) {
			if(mysqli_num_rows($queryResult) > 0) {
				while($row = mysqli_fetch_assoc($queryResult)) {
					foreach($row as $key => $value) {
						$row[$key] = urldecode($value);
					}
					$result[] = $row;
				}
			}
		}
		else {
			$result = false;
		}

		//Close connection
		disconnect($connexion);

		return $result;
	}
	//Make query to insert/update/delete
	function dbUpdate($query, $last = false) {
		//Connect to DB
		$connexion = connectDB();
		//Make the query
		$queryResult = mysqli_query($connexion, $query);
		//$last means for returning the last insert id from the connection
		if($queryResult) {
			if($last) {
				$res = mysqli_insert_id($connexion);
			}
			else {
				$res = true;
			}
			disconnect($connexion);
			return $res;
		}
		else {
			disconnect($connexion);
			return false;
		}
	}
	//Close connection
	function disconnect($link) {
		mysqli_close($link);
	}
?>