import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import Button, { IconButton } from "../components/button";
import { PlusIcon } from "../components/icons";
import { LabelInput } from "../components/input";
import ListItem from "../components/list-item";
import Modal from "../components/modal";
import { errorToast, infoToast, successToast } from "../components/toast";
import { getCategories, saveCategory, removeCategory } from "../services/categories";
import { listItemStyle } from "../styles/components";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const modalRef = useRef();

    const updateCategories = () => {
        getCategories().then(setCategories);
    }

    const addCategory = () => {
        saveCategory(name)
        .then(() => {
            updateCategories();
            modalRef.close();
            setName("");
            successToast("Categoría añadida", "top");
        })
        .catch(errorToast);
    }

    const deleteCategory = categoryName => () => {
        removeCategory(categoryName).then(() => {
            updateCategories();
            infoToast("Categoría eliminada" , "top");
        });
    }

    useEffect(updateCategories, []);

    return (<>
        <View style={listItemStyle.container}>
            <IconButton icon={<PlusIcon/>} onPress={() => modalRef.open()}>
                Añadir categoría
            </IconButton>
        </View>
        {categories.map((category, index) =>
            <ListItem
                key={`category-${index}`}
                text={category}
                url={`/categories/${category}/exercises`}
                deletion={deleteCategory(category)}
            />
        )}
        <Modal
            title="Nueva categoría"
            footerElement={
                <Button onPress={addCategory}>Añadir</Button>
            }
            modalRef={modalRef}
        >
            <LabelInput
                text="Nombre de categoría"
                value={name}
                onChange={setName}
                autoFocus
            />
        </Modal>
    </>);
}

export default Categories;