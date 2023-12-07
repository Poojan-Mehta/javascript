//filter
const userDetails = [{"id":1,"first_name":"Gratia","last_name":"Valde","email":"gvalde0@berkeley.edu","gender":"Female","ip_address":"174.74.254.165","age":1},
{"id":2,"first_name":"Alina","last_name":"Sweetman","email":"asweetman1@ebay.com","gender":"Female","ip_address":"218.101.4.229","age":22},
{"id":3,"first_name":"Lynea","last_name":"Izakson","email":"lizakson2@soup.io","gender":"Non-binary","ip_address":"215.247.97.99","age":31},
{"id":4,"first_name":"Sarah","last_name":"Ringsell","email":"sringsell3@ustream.tv","gender":"Genderfluid","ip_address":"143.230.247.193","age":44},
{"id":5,"first_name":"Babbie","last_name":"Giroldi","email":"bgiroldi4@army.mil","gender":"Female","ip_address":"84.209.241.189","age":55},
{"id":6,"first_name":"Alix","last_name":"Shinfield","email":"ashinfield5@prnewswire.com","gender":"Genderfluid","ip_address":"6.174.128.6","age":65},
{"id":7,"first_name":"Windy","last_name":"Eddington","email":"weddington6@joomla.org","gender":"Female","ip_address":"149.211.31.41","age":57},
{"id":8,"first_name":"Clerc","last_name":"Breyt","email":"cbreyt7@domainmarket.com","gender":"Male","ip_address":"139.61.214.248","age":84},
{"id":9,"first_name":"Amelina","last_name":"Briddle","email":"abriddle8@google.de","gender":"Female","ip_address":"153.171.1.188","age":49},
{"id":10,"first_name":"Eugenius","last_name":"Heskins","email":"eheskins9@addthis.com","gender":"Male","ip_address":"0.187.32.35","age":10},
{"id":11,"first_name":"Bram","last_name":"Mariaud","email":"bmariauda@cnn.com","gender":"Male","ip_address":"118.127.235.44","age":15},
{"id":12,"first_name":"Marcel","last_name":"MacPhee","email":"mmacpheeb@google.co.uk","gender":"Male","ip_address":"61.155.219.69","age":52},
{"id":13,"first_name":"Carce","last_name":"Lunt","email":"cluntc@lycos.com","gender":"Male","ip_address":"45.181.135.139","age":18},
{"id":14,"first_name":"Gil","last_name":"Brash","email":"gbrashd@reference.com","gender":"Male","ip_address":"229.76.158.65","age":32},
{"id":15,"first_name":"Simona","last_name":"Shackleton","email":"sshackletone@shutterfly.com","gender":"Female","ip_address":"24.86.25.39","age":56},
{"id":16,"first_name":"Renato","last_name":"Peter","email":"rpeterf@dyndns.org","gender":"Genderqueer","ip_address":"29.228.242.19","age":22},
{"id":17,"first_name":"Goldie","last_name":"Emloch","email":"gemlochg@goo.gl","gender":"Female","ip_address":"127.8.15.165","age":17},
{"id":18,"first_name":"Shane","last_name":"Goshawke","email":"sgoshawkeh@ehow.com","gender":"Male","ip_address":"241.114.195.224","age":45},
{"id":19,"first_name":"Alida","last_name":"Scrinage","email":"ascrinagei@a8.net","gender":"Female","ip_address":"244.39.248.200","age":28},
{"id":20,"first_name":"Jacqueline","last_name":"Sage","email":"jsagej@4shared.com","gender":"Female","ip_address":"11.66.168.152","age":27}
]

let filter_records = userDetails.filter((item) => item.age > 40)
//console.log(filter_records)


//map
let map_records = userDetails.map((item) => item.id + 10)
//console.log(map_records)

//map and return the records with updated values
let filter_map_records = userDetails
                        .map((item) => { 
                                item.id = item.id + 100 ;
                                return item;
                            }
                        )
//console.log(filter_map_records)