import { Account } from "../../domain/account/Account.interface"
import { AccountDTO } from "../../domain/account/AccountDTO.interface"
import { Mapper } from "./Mapper"

export class AccountMapper extends Mapper<Account, AccountDTO> {

    mapFrom( data: Account ): AccountDTO {
        return {
            email: data.email,
            iduser: data.iduser,
            name: data.name,
            lastname: data.lastname,
            phone: data.phone
        }
    }

    mapTo( data: AccountDTO ): Account {
        return {
            email: data.email,
            iduser: data.iduser,
            name: data.name,
            lastname: data.lastname,
            phone: data.phone
        }
    }
}