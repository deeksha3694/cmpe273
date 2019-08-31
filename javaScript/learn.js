'use strict'
//Program to create a email with the first letter of first_name and full word of last_name appended with company name. 
//create email id only if it has valid ip address.
//used parse to convert string to object. Then at last converted object to string using stringify. 
//Then by using typeof whether it is converted to string.

let given = '{ "name":"chocolate reddy", "ip":"10.19.21.09", "company":"Nestle"}';
var par_obj = JSON.parse(given); //usage of parse
var ip = par_obj.ip, name_new = par_obj.name, company = par_obj.company ,only_name,first_name, first_name_letter, last_name, num_name, ip_split, check, email_id;
var email = (name_new, company, ip) => {  
    only_name = name_new.split(" "); // usage of split method
    num_name = only_name.length;
    first_name = only_name[0];
    last_name = only_name[num_name-1];
    first_name_letter = first_name.slice(0,1); // usage of slice method
    email_id = first_name_letter + last_name + '@' + company + '.' + 'com';
    return name_letter(email_id);
};

var name_letter = (first_name_letter) => {
    if(first_name_letter === first_name_letter.toUpperCase())
    {
        return first_name_letter.toLowerCase();
    } 
    else 
    {
        return first_name_letter;
    }
};

var ip_check = (ip) => {
    ip_split = ip.split(".");
    check = ip_split.includes("255") //usage of includes 
    console.log(check);
    if((check == 1))
    {
        return 'not valid';
    }  
    else
    {
        return 'valid';
    } 
};

var to_send = { Name: name_new, Email: email(name_new, company, ip), Company: company, ip_address: ip };
var server_string = JSON.stringify(to_send); //usage of stringify
var check_string = typeof server_string;  //usage of typeof 
console.log(server_string);
console.log(check_string);
