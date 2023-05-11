export class user {
    id?: number | any;
    name?: string;
    email?: string;
    streetaddress?: string;
    city?: string;
    province?: string;
    postalcode?: string;
    usertype?: string;
}

export class signup {
    name?: string;
    email?: string;
    password?: string;
}

export class login {
    email?: string;
    password?: string;
}