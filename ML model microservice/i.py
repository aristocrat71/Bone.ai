import onnxruntime as ort
model = ort.load("model/best.onnx")
ort.checker.check_model(model)
print(ort.helper.printable_graph(model.graph))
