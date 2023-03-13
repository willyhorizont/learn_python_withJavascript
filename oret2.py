product_list_dict = [
    {id: 'id1', 'price': 30_000},
    {id: 'id2', 'price': 233_000},
    {id: 'id3', 'price': 5_000},
    {id: 'id4', 'price': 499_000}
]

product_dict_new = {id: 'id5', 'price': 686_868}
product_dict_new_2 = {id: 'id6', 'price': 274_345}

# print([*product_list_dict, { id: 'id5', 'price': 696969 } ])
# print([*product_list_dict, { **product_dict_new_2 } ])
# print({ **product_dict_new_2 })
# print({**product_dict_new, **product_dict_new_2})

product_dict_new_2_copy = { **product_dict_new_2 }
print(product_dict_new_2_copy['price'])
