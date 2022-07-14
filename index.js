import { nanoid } from "nanoid";
import fs from 'fs'
let menus = []
const rMenus = ['lwgfC9KSa10cCc5mW8xqM','YjtdrCfWNyfi7iBD1yu0f','kwTjxOdAASQ0t0ZMNrhYW','4vLQVA6P6ZbVf0yiYGON4']
const subMenus = ['F-sj2W4iV6yFMU2N1RULy','gvMcAewVOl3z2SwQhe58p','n1dvVAdt3xbLG_KjAN3Tu','mm0v7Ewi9oSAhXu6nDYpk','NUkoBLdswjgqCPdVNCwzj','TeS-P7aAnyUn3aXTWjGy6','x9UbOZr_NSRtMiu3TqLqu','0VxcInnt9wVPN1yx7MSmy','nO3ScUUK_kpEsv_KPsM5I','s8XXjLcV0mLkKRDfQebFv','Qv0B2nw-yA0TeDdCWUrC4','d8Q3qmnF3ttm2Oyi33BIh','H02wX-7qCBOZ_EQmUNAYn','7D8dfb8JJJQly_M2b7Lbt','fkP96YtTZOYvSn9YH9R1i','wArFSkyQAjB9ySdFgzNp0','lIU2hshgwOJtI_diicjqb','xdCnFqIfRKoKrUoGp5UX1','YlDAROS0rZWvX_uZkM_Ch','FFzM96DX-nZ3Ui1ltkYAi','MozsFmemjlabURcaM0ucr','4BKE3zrOUOO2dXFh4KZo0','GRdqVLncirN8GD7L15sOu','ReECScYA-afiWeLGnnnZ4','sEpuWf4SuD_0vkyDR7OR7','Quor-RJ3_Qe1_86Msq6oY','wUb631EDHwAN9hj-xGvnr','83E76RThToywhzhtgSvmz','LoVCHorWuifTcHM9hVU2J','Mmtbk3sHYRB_Bi6F3fq7I','-E_ncMsLX_MxZunQibnPk','YKQUh4zRthd9Y5eO2K1TS']
// const brands = ['TOYOTA','BMW','CHEVROLET','FORD','NISSAN','HYUNDAI','KIA','YUTON',
// 'AGRALE','RENAULT','HINO','IVECO','VOLKSWAGEN','FOTON','MARCOPOLO','YOUTONG','MAZDA',
// 'MERCEDES BENZ','SCANIA']


    // Para crear un array de objetos donde se relacione con un array y con un valor independiente
    /*const roleMenu = menus.map((x,index) => {
    return {
        rmIdAuto: index + 58,
        rmId: nanoid(),
        roleId: roleId,
        menuId: x,
        rmState: 1,
        createdAt: '2022-03-15 09:43:00',
        updatedAt: '2022-03-15 09:43:00'
    }
    })*/

    // Para crear un array de objetos donde se relacione con dos arrays
    let counter = 1664
    const new_menus = rMenus.forEach((x) => {
        subMenus.forEach((y) => {
            menus.push({
                rsmIdAuto: counter + 1,
                rsmId: nanoid(32),
                roleMenuId: x,
                subMenuId: y,
                rsmState: 1,
                createdAt: '2022-04-19 09:43:00',
                updatedAt: '2022-04-19 09:43:00'
            })
            counter++
        })
    }) 

    let formatted = JSON.stringify(menus)

    fs.writeFileSync("roleSubmenus.json", formatted, 'utf8')