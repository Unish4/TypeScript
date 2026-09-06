function printId (id: string | number) {
    if(typeof id === "string") {
        id.includes("he");
    }else {
        id.toFixed()
    }
}

type Admin = {
    role: "admin";
    permissions: string[];
}

type Customer = {
    role : "customer";
    loyaltyPoint: number;
}

function describeUser (u: Admin | Customer) {
    if(u.role === "admin"){
        u.permissions
    } else {
        u.loyaltyPoint
    }
}

const arrOfUnion : (string | number) [] = ["a", 1, "b"]

