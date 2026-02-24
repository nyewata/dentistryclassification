import os
import random
import numpy as np
from PIL import Image
import tensorflow as tf

# ===== SETTINGS =====
input_folder = "dataset-pre-processing/wisdom"
output_folder = "augmented/wisdom"
target_total = 533
image_size = (224, 224)

os.makedirs(output_folder, exist_ok=True)

# ===== Safe Dental Augmentation Layer =====
data_augmentation = tf.keras.Sequential([
    tf.keras.layers.RandomRotation(0.02),      # ~7 degrees
    tf.keras.layers.RandomTranslation(0.02, 0.02),
    tf.keras.layers.RandomZoom(0.05),
])

def augment_image(img):
    img = tf.image.resize(img, image_size)
    img = tf.cast(img, tf.float32) / 255.0

    # Apply geometric transforms
    img = data_augmentation(img, training=True)

    # Brightness and contrast
    img = tf.image.random_brightness(img, max_delta=0.1)
    img = tf.image.random_contrast(img, 0.9, 1.1)

    # Small Gaussian noise
    noise = tf.random.normal(shape=tf.shape(img), mean=0.0, stddev=0.01)
    img = img + noise

    img = tf.clip_by_value(img, 0.0, 1.0)
    img = tf.cast(img * 255, tf.uint8)

    return img


# ===== Load Original Images =====
image_files = [f for f in os.listdir(input_folder)
               if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.BMP'))]

original_count = len(image_files)
print(f"Original images: {original_count}")

# Copy originals
for f in image_files:
    img = Image.open(os.path.join(input_folder, f)).convert("RGB")
    img = img.resize(image_size)
    img.save(os.path.join(output_folder, f))

needed = target_total - original_count
print(f"Generating {needed} augmented images...")

for i in range(needed):
    base_name = random.choice(image_files)
    base_path = os.path.join(input_folder, base_name)

    img = Image.open(base_path).convert("RGB")
    img = np.array(img)

    img = augment_image(img).numpy()
    img_pil = Image.fromarray(img)

    save_name = f"aug_{i}_{base_name}"
    img_pil.save(os.path.join(output_folder, save_name))

print("Augmentation complete.")